pipeline{
  agent{
    docker{
      image 'alpine:3.16'
      args '-p 3050:3050'
    }
  }
  stages{
    stage('Build'){
      steps{
        sh 'npm install'
      }
    }
  }
}
      

      
