pipeline {
    agent {
        docker { 
            image 'node:16.13.1-alpine'
            args '-p 3000:3000 -p 5000:5000 -u root'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }  
}
