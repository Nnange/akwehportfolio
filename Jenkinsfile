pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh ' npm install && npm run build'
                sh 'docker build -t akwehportfolio:latest .'
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f akwehportfolio || true

                    # Remove old dangling image (optional, keeps things clean)
                    docker rmi akwehportfolio:previous || true

                    # Tag the new image as 'previous' for rollback if needed (optional)
                    docker tag akwehportfolio:latest akwehportfolio:previous || true

                    # Run new container with proper flags
                    docker run -d \
                        -p 3000:80 \
                        --name akwehportfolio \
                        --restart unless-stopped \
                        akwehportfolio:latest
                    
                    # Wait a bit and check if container is running
                    sleep 10
                    docker ps | grep akwehportfolio || exit 1
                '''
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}