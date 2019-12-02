import React,{Component} from "react";
import {Card,Theme} from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";
import FormCard from "./components/FormCard";


export default class Login extends Component {
    render(){
        const combo = {
            [Widget.Card]:{
                Container:{
                    normal:{width:400,height:520}
                }
            }
        };
        return (
            <Theme config={combo}>
                <Card
                    viewClass={"vertical"}
                    type={"combo"}
                    content={<FormCard />}
                    shadow={"hover"}
                />
            </Theme>
        );
    }
}