pipeline {
  agent any

  stages {
    stage('Clonar código') {
      steps {
        git branch: 'main',
            url: 'https://github.com/arteagaluis/telio-web-landing.git'
      }
    }

    stage('Build landing-page') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker rm -f landing-page || true'
        sh 'docker-compose build'
        sh 'docker-compose up -d'
      }
    }
  }
}