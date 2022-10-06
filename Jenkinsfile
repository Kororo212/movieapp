

pipeline {
   agent none 
    stages {
        stage('Example Build') {
            agent { 
                docker 'node:lastest'
                args 'docker run -u 0  --name docker-jenkins:react -p 3040:3040'
                } 
            steps {
                echo 'Hello, Maven'
                sh 'npm install'
            }
        }
     }
}
