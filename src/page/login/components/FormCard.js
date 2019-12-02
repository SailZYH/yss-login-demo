import React,{Component} from "react";
import {Input,Radio,Button} from "@lugia/lugia-web";
import styled from "styled-components";


const CardContainer  = styled.div`
text-align:center;
width:80%;
height:80%
`
const data = [
    {text:"记住用户名/密码",value:"rember"},
    {text:"保持登录",value:"keepOnline"}
];

export default class FormCard extends Component{
    render(){
        return(
            <CardContainer>
                <Input 
                    placeholder={"请输入用户名"}
                    autoFocus={"true"}
                    value={this.props.userName}
                    ></Input>
                <Input 
                    placeholder={"请输入密码"}
                    value={this.props.password}
                    ></Input>
                <Radio 
                    value={this.props.remember}    
                    >记住用户名/密码</Radio>
                <Radio 
                    value={this.props.keyOnline}
                    >保持登录</Radio>
                <Button type="primary" shape="round">登录</Button>
            </CardContainer>
        );
    }
}