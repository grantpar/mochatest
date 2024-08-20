pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo "building"
                nodejs('Node 22') {
                    sh 'npm install'
                }
            }
        }
        stage("test"){
            steps{
                echo "testing"
                nodejs('Node 22') {
                    sh 'npm run test'
                }
            }
        }
        stage("deploy"){
            steps{
                echo "deploying"
            }
        }
    }
}