pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/nikhil-1-2-3/cloud-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cloud-frontend .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop cloud-frontend || true'
                sh 'docker rm cloud-frontend || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:80 --name cloud-frontend cloud-frontend'
            }
        }

    }
}
