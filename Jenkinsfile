pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/nikhil-1-2-3/cloud-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build --no-cache -t cloud-frontend .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop cloud-frontend || echo not running'
                bat 'docker rm cloud-frontend || echo not exists'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:80 --name cloud-frontend cloud-frontend'
            }
        }

    }
}
