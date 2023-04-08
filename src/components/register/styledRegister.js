import styled from "styled-components"

export const StyledRegister = styled.div`
    font-family: "Inter", sans-serif;
    min-height: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #000000;
    .container{
        margin-top: 50px;
        width: 95%;
    }
    .header_register{
        display: flex;
        width: 90%;
        margin-left: 5%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }
    .kenzie_title{
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #FF577F;
    }
    a{
        text-decoration: none;
    }
    .button_back{
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2426px;
        gap: 10.15px;
        width: 67.49px;
        height: 40.11px;
        background: #212529;
        border-radius: 4px;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        color: #F8F9FA;
    }
    .form_register{
        background: #212529;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        max-height: fit-content;
        padding-top: 30px;
        margin-bottom: 50px;
        padding-bottom: 30px;
    }
    .div_mesage{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
    }
    .register_title{
        font-style: normal;
        font-weight: 700;
        font-size: 14.3916px;
        line-height: 22px;
        color: #F8F9FA;
    }
    .register_text{
        font-style: normal;
        font-weight: 400;
        font-size: 9.59437px;
        line-height: 18px;
        color: #868E96;
    }
    .div_input{
        width: 90%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 20px;
    }
    .text_error{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #F8F9FA;
    }
    .label_input{
        font-style: normal;
        font-weight: 400;
        font-size: 9.73988px;
        color: #F8F9FA;
    }
    .input_register{
        height: 38.38px;
        border: 0.973988px solid #343B41;
        border-radius: 3.19812px;
        background: #343B41;
        padding: 0px 12.9865px;
        color: #F8F9FA;
        font-style: normal;
        font-weight: 400;
        font-size: 12.9865px;
        line-height: 21px;
    }
    .button_register{
        cursor: pointer;
        height: 38.38px;
        width: 90%;
        margin-left: 5%;
        border: 1.2182px solid #59323F;
        border-radius: 4px;
        background: #59323F;
        color:  #FFFFFF;
        font-style: normal;
        font-weight: 500;
        font-size: 12.7925px;
        line-height: 21px;
    }
    @media(min-width: 425px){
        min-height: 1180px;
        .container{
            width: 369px;
        }
        .form_register{
            height: 891.19px;
        }
    }
`