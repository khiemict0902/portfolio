pipeline {
    agent any
    environment {
	DOCKER_IMG = "${RE_URL}/porfolio/portfolio:v1_${GIT_COMMIT}"
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh "docker login ${RE_URL} -u ${RE_USER} -p ${RE_PASS}"
		sh "docker build -t ${DOCKER_IMG}"
		sh "docker push $DOCKER_IMG"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
		sh "docker login ${RE_URL} -u ${RE_USER} -p ${RE_PASS}"
		sh "docker pull ${DOCKER_IMG}"
            }
        }
    }
}
