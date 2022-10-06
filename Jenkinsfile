pipeline {
    agent {
        docker { 
            image 'node:16.13.1-alpine'
            args 'docker build . -t jenkins-react -p 3050:3050 '
        }
            }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    
}
