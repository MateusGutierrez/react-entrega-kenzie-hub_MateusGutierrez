import styled from "styled-components"

export const StyledDash = styled.div`
    font-family: "Inter", sans-serif;
    min-height: 850px;
    background-color:  #121214;
    .header_container{
        display: flex;
        padding: 0 1rem;
        justify-content: space-between;
        height: 73px;
        align-items: center;
        border-bottom: 1px solid #868E96;
    }
    .header_title{
        color: #FF577F;
        font-size: 1rem;
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
        border-bottom: 1px solid #868E96;
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
    @media(min-width: 425px){
        height: 1200px;
        .header_container{
            justify-content: space-around;
        }
        .section_user{
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
        .div_notice{
            padding-left: 20%;
            margin-top: 5%;
        }
        .notine_title{
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 28px;
            color: #F8F9FA;
            margin-bottom: 23px;
        }
        .notice_text{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
        }
    }
`