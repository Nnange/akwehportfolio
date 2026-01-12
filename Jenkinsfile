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
                    docker run -d -p 3000:80 --name akwehportfolio akwehportfolio:latest
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