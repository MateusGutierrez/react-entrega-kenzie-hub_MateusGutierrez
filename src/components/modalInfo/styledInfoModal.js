import styled from "styled-components"

export const StyledInfoModal = styled.div`
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
    .div_modalInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40.11px;
        background: #343B41;
        border-radius: 3.20867px 3.20867px 0px 0px;
        padding: 0px 16.0434px;
    }
    .info_modalTitle{
        font-style: normal;
        font-weight: 700;
        font-size: 11.2304px;
        line-height: 19px;
    }
    .button_closeInfo{
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: #868E96;
        font-style: normal;
        font-weight: 600;
        font-size: 12.8347px;
        line-height: 21px;
    }
    .div_input_nameInfo{
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .nameInfo{
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        color: #F8F9FA;
    }
    .inputInfo{
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
        display: flex;
        align-items: center;
    }
    .div_buttonsInfo{
        width: 90%;
        margin-left: 5%;
        margin-top: 10%;
        display: flex;
        justify-content: space-between;
    }
    .button_saveInfo{
        font-style: normal;
        font-weight: 500;
        font-size: 12.7913px;
        padding: 0px 22.3336px;
        height: 38.37px;
        background: #59323F;
        border: 1.2182px solid #59323F;
        border-radius: 4px;
        color: #FFFFFF;
        cursor: pointer;
        width: 163.09px;
    }
    .button_del{
        padding: 0px 22.3336px;
        height: 38.37px;
        width: 78.35px;
        background: #868E96;
        border: 1.2182px solid #868E96;
        border-radius: 4px;
        font-weight: 500;
        font-size: 12.7913px;
        line-height: 21px;
        color: #FFFFFF;
        cursor: pointer;
    }
    @media(min-width: 425px){
        width: 369px;
        height: 342px;

        .info_modalTitle{
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
        }
        .button_closeInfo{
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 26px;
        }
        .nameInfo{
            font-style: normal;
            font-weight: 400;
            font-size: 12.182px;
        }
        .inputInfo{
            font-style: normal;
            font-weight: 400;
            font-size: 16.2426px;
            line-height: 26px;
        }
        .button_saveInfo{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 26px;
            width: 204px;
            height: 48px;

        }
        .button_del{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 26px;
            width: 98px;
            height: 48px;
        }

    }
`