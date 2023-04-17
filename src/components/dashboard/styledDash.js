import styled from "styled-components"

export const StyledDash = styled.div`
    font-family: "Inter", sans-serif;
    min-height: 100vh;
    background-color:  #121214;
    .header_container{
        display: flex;
        padding: 0 1rem;
        justify-content: space-between;
        height: 73px;
        align-items: center;
    }
    .header_title{
        color: #FF577F;
        font-size: 14px;
        font-weight: bold;
    }
    .button_back{
        padding: 0px 16.2426px;
        background: #212529;
        border-radius: 4px;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        color: #F8F9FA;
        border: 1px solid #212529;
        cursor: pointer;
    }
    .section_user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 12px;
        gap: 10px;
        padding: 0 1rem;
        height: 131px;
    }
    .user_name{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #F8F9FA;
    }
    .user_module{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #868E96;
    }

    .section_tech{
        color: white;
    }
    .div_tech{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin-left: 5%;
        margin-top: 10%;
        margin-bottom: 10%;
    }
    .tecnologias{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
    }
    .div_tech_container{
        width: 90%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 22px;
        padding-bottom: 22px;
        background: #212529;
        border-radius: 4px;
    }
    .tech_container{
        display: flex;
        justify-content: space-between;
        padding: 12.182px;
        border: 1px solid #F8F9FA;
        margin-left: 8px;
        margin-right: 8px;
        background: #121214;
        border-radius: 4.06066px;
        cursor: pointer;

    }
    .tech_container:hover{
        background-color: #343B41;
    }
    .button_sum{
        cursor: pointer;
        background: #212529;
        border-radius: 4px;
        width: 32.49px;
        height: 32px;
        color: #FFFFFF;
        border: none;
    }
    .h2_tech_title{
        font-style: normal;
        font-weight: 700;
        font-size: 14.2123px;
        line-height: 24px;
    }
    .p_tech_status{
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        color: #868E96;
    }
    .borda{
            border-bottom: 1px solid #868E96;
    }

    @media(min-width: 900px){
        height: 1200px;
        .header_container{
            justify-content: space-between;
            margin: 0;
            padding: 0;
            width: 780px;
            margin: 0 auto;
        }
        .header_title{
            font-size: 16px;
        }

        .section_user{
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            width: 780px;
            gap: 0;
            padding: 0;
        }
        .section_tech{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 780px;
        }
        .div_tech{
            margin-left: 0%;
            width: 100%;
        }
        .div_tech_container{
            margin-left: 0%;
            width: 100%;
        }
    }
`