pipeline {
    agent { 
        docker { 
            image 'node:lastest'
            args '-p 3000:3000'
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
      

      
