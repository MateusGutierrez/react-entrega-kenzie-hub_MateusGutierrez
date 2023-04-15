import styled from "styled-components"

export const StyledLogin = styled.div`
    font-family: "Inter", sans-serif;
    min-height: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #000000;
    
    .container{
        width: 95%;
    }
    .kenzie_title{
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #FF577F;
        margin-bottom: 20px;
    }
    .form_login{
        height: 432.69px;
        display: flex;
        flex-direction: column;
        border-radius: 3.20867px;
        background: #212529;
        box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    }
    .login_title{
        text-align: center;
        margin-top: 33.7px;
        font-style: normal;
        font-weight: 700;
        font-size: 14.439px;
        line-height: 22px;
        margin-bottom: 22.8px;
        color: #F8F9FA;
    }
    .input_container{
        width: 90%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .input_label{
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        margin-bottom: 20px;
        color: #F8F9FA;
    }
    .input_form{
        padding: 0px 13.0293px;
        height: 38.5px;
        background: #343B41;
        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        color: #F8F9FA;
    }
    .input_erro{
        color: #F8F9FA;
        margin-top: 10px;
        font-size: 12px;
    }
    .form_button{
        cursor: pointer;
        width: 90%;
        margin-left: 5%;
        height: 38.5px;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        background: #FF577F;
        padding: 0px 22.3336px;
        font-style: normal;
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
        color:  #FFFFFF;
    }
    .mesage_to_register{
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        line-height: 14px;
        color: #868E96;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 25px;
    }
    .register_button{
        width: 90%;
        margin-left: 5%;
        margin: 0 auto;
        text-align: center;
        height: 30px;
        color: #F8F9FA;
        padding-top: 8.5px;
        background: #868E96;
        border: 1.2182px solid #868E96;
        border-radius: 4px;
        font-style: normal;
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
    }
    a{
        text-decoration: none;
    }

    @media(min-width: 425px){
        min-height: 1180px;
        align-items: flex-start;
        padding-top: 80px;
        .container{
            width: 369px;
        }
    }
`