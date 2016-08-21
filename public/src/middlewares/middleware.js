import request from 'superagent';

export  default store=>next=>action=> {
    switch (action.type) {
        case 'Add':
            request.post('./todos')
                .send({text: action.text})
                .end((err, res)=> {
                    next({type: 'GETTODOS', todoItem: res.body})
                });
            break;
        case 'Delete':
            request.delete('./todos')
                .send({index:action.index})
                .end((err,res)=>{
                    next({type:'GETTODOS',todoItem:res.body})
                });
            break;
        case 'Toggle':
            request.put('./todos')
                .send({index:action.index})
                .end((err,res)=>{
                    next({type:'GETTODOS',todoItem:res.body})
                });
            break;
        case 'SetName':
            request.put('./setName')
                .send({name:action.name})
                .end((err,res)=>{
                    next({type:'ButtonGETTODOS',state:res.body})
                });
            break;
        
        default:
            next(action)
    }
}