

pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args 'docker run -u 0 -p 3000:3000' 
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
