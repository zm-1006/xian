/**
 * Created by badou on 2018/3/6.
 */
const express = require('express');
//const bodyParser = require('body-parser')

const router = express.Router();

//router.use(bodyParser.urlencoded({extended:false}))
//router.use(bodyParser.json())

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// 1.获取物理机健康状况
router.get('/hostStatus', function(req, res) {
    res.json({
        ISOK:true,
        data:{
            'good': 23,
            'bad': 23,
            'bad_monthly': 323,
            'bad_until_now': 3423
        }
    });
});
// 2.获取集群资源总量
router.get('/:ct/resource', function(req, res){
    var n = parseInt(req.params.ct);
    var json = {
        ISOK:true,
        data:{
            'cluster': n,
            'nodes': 18,
            'cores': 345,
            'memory': 2394712937,
            'disk': 123234089203
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});
// 3.获取集群资源使用情况
router.get('/:ct/resource/usage', function(req, res){
    let n = parseInt(req.params.ct)
    let num = parseInt(req.query.range) || 30
    console.log(num)
    let obj = {
        'timestamp': 123445678754,
        'cpu_percent': 0.3,
        'mem_used': 123849,
        'disk_used': 32842812,
        'disk_input': 3829.2,
        'disk_output': 1382.1,
        'net_input': 32901.4,
        'net_output': 4930.8,
        'health': 0
    }
    let data = []
    for(let i=0;i<num;i++){
        data.push(obj)
    }
    let json = {
        ISOK:true,
        data:{
            'cluster': n,
            'length': num,
            'data': data
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});
// 4.获取集群服务当前运行状态
router.get('/:ct/serviceStatus', function(req, res){
    let n = parseInt(req.params.ct);
    let json = {
        ISOK:true,
        data:{
            'cluster': n,
            'length': 3,
            'data': [
                {
                    'name': 'sqoop',
                    'status': 0
                },
                {
                    'name': 'sqoop',
                    'status': 1
                },
                {
                    'name': 'sqoop',
                    'status': 0
                }
            ]
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});
// 5.获取集群服务运行状态历史
router.get('/:ct/serviceStatus/history', function(req, res){
    let n = parseInt(req.params.ct)
    let num = parseInt(req.query.range) || 30
    console.log(num)
    let obj = {
        'timestamp': 123821312499,
        'service_name': 'flume',
        'health': 0
    }
    let data = []
    for(let i=0;i<num;i++){
        data.push(obj)
    }
    let json = {
        ISOK:true,
        data:{
            'cluster': n,
            'length': num,
            'data': data
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});

// 6.获取集群数据状态
router.get('/:ct/dataStatus', function(req, res){
    let n = parseInt(req.params.ct)
    let num = 0
    let data = []
    let obj = {
        'timestamp': 123908234082,
        'volume': 2384.43
    }
    let obj1 = {
        'timestamp': 123908234082,
        'volume_in': 2384.43,
        'volume_out': 2394.3
    }
    let obj2 = {
        'timestamp': 123908234082,
        'records': 2384
    }
    if(n===0){
        num = parseInt(req.query.range)|| 24
        for(let i=0;i<num;i++){
            data.push(obj)
        }
    }else if(n===1){
        num = parseInt(req.query.range)|| 24
        for(let i=0;i<num;i++){
            data.push(obj1)
        }
    }else{
        num = parseInt(req.query.range)|| 1
        for(let i=0;i<num;i++){
            data.push(obj2)
        }
    }

    let json = {
        ISOK:true,
        data:{
            'cluster': n,
            'length': num,
            'data': data
        }
    }
    switch(n)
    {
        case 0:
            console.log(n)
            res.json(json)
            break;
        case 1:
            console.log(n)
            res.json(json)
            break;
        case 2:
            console.log(n)
            res.json(json)
            break;
        default:
            console.log('参数错误')
            res.json({
                ISOK:false,
                msg:'请求错误',
                data:null
            })
    }
});

// 7.获取计算存储集群虚拟资源总量
router.get('/virtualResource', function(req, res) {
    res.json({
        ISOK:true,
        data:{
            'vcores': 123,
            'vmems': 492039,
            'hdfs_capacity': 2934802983
        }
    });
});

// 8.获取计算存储集群资源使用情况
router.get('/virtualResource/usage', function(req, res){
    let num = parseInt(req.query.range) || 30
    console.log(num)
    let obj = {
        'timestamp': 1293801928309,
        'vcore_used': 12,
        'vmem_used': 23098,
        'hdfs_used': 3280948
    }
    let data = []
    for(let i=0;i<num;i++){
        data.push(obj)
    }
    let json = {
        ISOK:true,
        data:{
            'length': num,
            'data': data
        }
    }
    res.json(json)
});

// 9.获取用户使用资源情况
router.get('/users/statistic', function(req, res) {
    let num = parseInt(req.query.range) || 13
    console.log(num)
    let obj = {
        'user': 'anjian',
        'vcore_seconds': 232342,
        'mem_used': 3293204,
        'during_time': 23489123,
        'jobs': 12391
    }
    let data = []
    for(let i=0;i<num;i++){
        data.push(obj)
    }
    let json = {
        ISOK:true,
        data:{
            'timestamp': 12894810982309,
            'length': num,
            'data': data
        }
    }
    res.json(json)
});



module.exports = router;



var res ={
    type:'year',
    data:[
        {
            title:'1',
            img:['img1','img2','img3']
        },
        {
            title:'2',
            img:['img1','img2','img3']
        },
        {
            title:'3',
            img:['img1','img2','img3']
        }
    ]
};

var res2 ={
    type:'month',
    data:[
        {
            title:'1',
            img:['img1','img2','img3']
        },
        {
            title:'2',
            img:['img1','img2','img3']
        },
        {
            title:'3',
            img:['img1','img2','img3']
        }
    ]
};






