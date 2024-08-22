def gv
pipeline{
    agent any
    parameters {
        choice(name: 'VERSION', choices: ['1.1.0', '1.1.1'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    }
    stages{
        stage("init"){
            steps{
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage("build"){
            steps{
                script {
                    gv.buildApp()
                }
                nodejs('Node 22') {
                    sh 'npm install'
                }
            }
        }
        stage("test"){
            when {
                expression {
                    params.executeTests == true
                }
            }
            steps{
                echo "testing"
                nodejs('Node 22') {
                    sh 'npm run test'
                }
            }
        }
        stage("deploy"){
            steps{
                script {
                    gv.deployApp()
                }
            }
        }
    }
}