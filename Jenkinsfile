pipeline {
  agent any

  stages {
    stage('Clonar código') {
      steps {
        git branch: 'main',
            url: 'https://github.com/arteagaluis/telio-web-landing.git'
      }
    }

 stage('Build con docker-compose') {
      steps {
        dir('../../') { // Subes dos niveles hasta llegar a la raíz de `iot-app`
          sh '''
            pwd
            ls -la
            docker-compose down
            docker-compose up -d --build
          '''
        }
      }
    }
  }
}