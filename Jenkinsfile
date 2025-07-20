pipeline {
  agent any

  stages {
    stage('Clonar código') {
      steps {
        git branch: 'main',
            url: 'https://github.com/arteagaluis/telio-web-landing.git'
      }
    }

    stage('Build') {
      steps {
        sh '''
        docker-compose down
        docker-compose up -d --build
        '''
      }
    }
  }
}
