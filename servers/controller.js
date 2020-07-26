const path = require('path');
const model = require('./model');
const hashing = require(path.join(__dirname, 'hashing.js'));
const AWS = require('aws-sdk');
const salt = require(path.join(__dirname, 'config','db.json')).salt;


AWS.config.loadFromPath(
    path.join(__dirname, 'config', 'awsConfig.json')
// RDS 보안 정보가 담긴 awsConfig.json 파일의 경로와 이름을 알맞게 기입합니다.
  );

module.exports = {
    needs: () => upload,
    api: {
        getData : (req,res)=>{
            model.api.getData( data => { 
                return res.send(data)
            })
        },
       
        modifyData: (req,res)=>{

        },
        deleteData: (req,res)=>{

        },
        sendPw : (req,res)=>{
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt);

            model.api.searchInfo(body,hash, result =>{
                var obj = {};
                if(result[0]) {
                    obj['suc']=true;
                    obj['msg']='로그인 성공';
                  
                  } else {
                    obj['suc']=false;
                    obj['msg']='로그인 실패';
                  }
                  res.send(obj);
            })

            console.log('1. salt 값 :', salt);
            ///console.log('2.result :', result[0]);
            console.log('3. hash 결과 :', hash);
            
        },
       
    },
    add :{
        board : (req,res)=>{
            const body = req.body;

            model.add.board(body, result =>{
                if(result){
                    res.send(true);
                }
            })
        }
    },
}
