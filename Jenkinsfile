pipeline {
    agent any
    environment {
	DOCKER_IMG = "${RE_URL}/portfolio/portfolio:v1_${GIT_COMMIT[0..7]}"
	DOCKER_CONTAINER = "portfolio"
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh 'groups'
                sh 'docker ps'
		sh "docker build -t ${DOCKER_IMG} ."
		sh "docker login ${RE_URL} -u ${RE_USER} -p ${RE_PASS}"
		sh "docker push $DOCKER_IMG"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
		
		sh "docker login ${RE_URL} -u ${RE_USER} -p ${RE_PASS}"
		sh "docker pull ${DOCKER_IMG}"
		sh "docker rm ${DOCKER_CONTAINER} || true"
		sh "docker run --name ${DOCKER_CONTAINER} -dp 3000:3000 ${DOCKER_IMG}"
            }
        }
    }
}
