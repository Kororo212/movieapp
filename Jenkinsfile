pipeline{
  agent{
    docker{
      image:'node:14-alpine'
      args:'-p 3050:3050'
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
      

      
