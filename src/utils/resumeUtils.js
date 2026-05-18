export function displayMonthYear(a) {
  if (a === "Present") return "Present";
  const date = new Date(a);
  const month = date.toLocaleString("default", { month: "short" });
  return `${month} ${date.getFullYear()}`;
}

export function getDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  if (months > 12) {
    const years = Math.floor(months / 12);
    const rem = months % 12;
    const yrLabel = years > 1 ? "yrs" : "yr";
    const moLabel = rem > 1 ? "mos" : "mo";
    if (rem === 0) return `${years} ${yrLabel}`;
    return `${years} ${yrLabel} ${rem} ${moLabel}`;
  }
  const moLabel = months > 1 ? "mos" : "mo";
  return `${months} ${moLabel}`;
}
