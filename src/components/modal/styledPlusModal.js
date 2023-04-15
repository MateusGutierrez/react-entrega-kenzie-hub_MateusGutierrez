import styled from "styled-components"

export const StyledPlusModal = styled.div`
    width: 296px;
    height: 274.34px;
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: #212529;

    .div_modalClose{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40.11px;
        background: #343B41;
        border-radius: 3.20867px 3.20867px 0px 0px;
        padding: 0px 16.0434px;
    }
    .register_modalTitle{
        font-style: normal;
        font-weight: 700;
        font-size: 11.2304px;
        line-height: 19px;
    }
    .button_closePlus{
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: #868E96;
        font-style: normal;
        font-weight: 600;
        font-size: 12.8347px;
        line-height: 21px;
    }
    .div_input_namePlus{
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .namePlus{
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        color: #F8F9FA;
    }
    .inputPlus{
        height: 38.5px;
        background: #343B41;
        border: 0.9772px solid #F8F9FA;
        border-radius: 3.20867px;
        padding: 0px 13.0293px;
        font-style: normal;
        font-weight: 400;
        font-size: 13.0293px;
        line-height: 21px;
        color: #F8F9FA;
    }
    .button_Plus{
        width: 90%;
        margin-left: 5%;
        height: 38.5px;
        background: #FF577F;
        border: 1.2182px solid #FF577F;
        border-radius: 4.06066px;
        margin-top: 5%;
        color: #FFFFFF;
        cursor: pointer;
    }
    @media(min-width: 425px){
        width: 369px;
        height: 342px;

        .register_modalTitle{
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
        }
        .button_closePlus{
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 26px;
        }
        .inputPlus{
            font-style: normal;
            font-weight: 400;
            font-size: 16.2426px;
            line-height: 26px;
        }
        .namePlus{
            font-style: normal;
            font-weight: 400;
            font-size: 12.182px;
        }
        .button_Plus{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 26px;
            margin-top: 10%;
            height: 48px;
        }
    }
`