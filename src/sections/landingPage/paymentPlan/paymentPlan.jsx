import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import "./styles.scss";
import GeneralButton from "../../../components/GeneralButton";
import { REGISTRATION_PAGE } from "../../../routes";
import HeaderText from "../../../components/headerText/headerText";
import NormalText from "../../../components/normalText/normalText";

const PaymentPlan = () => {
  const { push } = useHistory();

  const list = [
    {
      id: 1,
      icon: "https://res.cloudinary.com/dmrdnero7/image/upload/v1654033827/frontendMentorship/good_dky1dw.png",
      text: "Create an account",
    },
    {
      id: 2,
      icon: "https://res.cloudinary.com/dmrdnero7/image/upload/v1654033827/frontendMentorship/good_dky1dw.png",
      text: "Join the community",
    },
    {
      id: 3,
      icon: "https://res.cloudinary.com/dmrdnero7/image/upload/v1654033827/frontendMentorship/good_dky1dw.png",
      text: "Fill out the question form",
    },
    {
      id: 4,
      icon: "https://res.cloudinary.com/dmrdnero7/image/upload/v1654033827/frontendMentorship/good_dky1dw.png",
      text: "Wait for launch and we’ll contact you via mail",
    },
  ];
  return (
    <div className="payment_plan_and_steps_sections">
      <div className="payment_container">
        <HeaderText text="Payment Plan" className="payment_header" />
        <NormalText
          className="sub_text"
          width="444.78px"
          color="#000000"
          text="Pay a one-time fee to unlock the mentorship program  and have full access to the community."
          margin="0px 0px 30px 0px"
        />

        <div>
          <p className="amount">
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.96033 17.1303V0.25669H6.19042L16.1459 12.4057H14.6031V0.25669H18.46V17.1303H15.2299L5.27443 4.9813H6.81716V17.1303H2.96033ZM0.549814 11.3692V9.34434H4.2138V11.3692H0.549814ZM0.549814 8.04266V6.01783H4.2138V8.04266H0.549814ZM17.2788 11.3692V9.34434H20.8705V11.3692H17.2788ZM17.2788 8.04266V6.01783H20.8705V8.04266H17.2788Z"
                fill="#363636"
              />
            </svg>
            44,999
            <span className="former_price">
              {" "}
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.24189 15.3188V0.202865H5.13551L14.0539 11.0864H12.6719V0.202865H16.127V15.3188H13.2333L4.31493 4.43533H5.69696V15.3188H2.24189ZM0.0824674 10.1578V8.34389H3.36479V10.1578H0.0824674ZM0.0824674 7.1778V5.36388H3.36479V7.1778H0.0824674ZM15.0689 10.1578V8.34389H18.2864V10.1578H15.0689ZM15.0689 7.1778V5.36388H18.2864V7.1778H15.0689Z"
                  fill="#363636"
                />
              </svg>
              <span
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "#C31D1D",
                  textDecorationThickness: "5px",
                  marginLeft: "5px",
                }}
              >
                100,000
              </span>
            </span>
          </p>

          <p className="amount  amount_in_dollar">
            <svg
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.68287 21.557V0.822944H7.88863V21.557H5.68287ZM6.47694 19.1748C5.24172 19.1748 4.05797 19.0131 2.92568 18.6896C1.79339 18.3513 0.881682 17.9175 0.190546 17.3882L1.40371 14.6971C2.06544 15.1677 2.8448 15.5574 3.74181 15.8662C4.65352 16.1603 5.57259 16.3073 6.499 16.3073C7.20484 16.3073 7.77099 16.2412 8.19743 16.1088C8.63858 15.9618 8.96209 15.7633 9.16796 15.5133C9.37383 15.2633 9.47677 14.9765 9.47677 14.653C9.47677 14.2413 9.31501 13.9178 8.9915 13.6825C8.66799 13.4325 8.24155 13.234 7.71217 13.0869C7.18279 12.9252 6.59458 12.7781 5.94756 12.6458C5.31525 12.4987 4.67558 12.3223 4.02856 12.1164C3.39624 11.9105 2.81539 11.6458 2.28601 11.3223C1.75663 10.9988 1.32283 10.5724 0.984618 10.043C0.661107 9.51361 0.499352 8.83718 0.499352 8.0137C0.499352 7.1314 0.734632 6.32998 1.20519 5.60943C1.69046 4.87418 2.41101 4.29333 3.36683 3.86688C4.33736 3.42573 5.55053 3.20516 7.00633 3.20516C7.97686 3.20516 8.93268 3.3228 9.87381 3.55808C10.8149 3.77865 11.6458 4.11687 12.3663 4.57273L11.2634 7.2858C10.5429 6.87406 9.82234 6.57261 9.10179 6.38144C8.38125 6.17557 7.6754 6.07264 6.98427 6.07264C6.29313 6.07264 5.72699 6.15352 5.28584 6.31527C4.84469 6.47703 4.52853 6.69025 4.33736 6.95494C4.1462 7.20493 4.05062 7.49903 4.05062 7.83724C4.05062 8.23428 4.21237 8.55779 4.53588 8.80777C4.85939 9.04305 5.28584 9.23422 5.81522 9.38127C6.3446 9.52832 6.92545 9.67537 7.55776 9.82242C8.20479 9.96947 8.84445 10.1386 9.47677 10.3297C10.1238 10.5209 10.712 10.7782 11.2414 11.1018C11.7708 11.4253 12.1972 11.8517 12.5207 12.3811C12.8589 12.9105 13.028 13.5796 13.028 14.3883C13.028 15.2559 12.7854 16.05 12.3001 16.7705C11.8149 17.4911 11.087 18.0719 10.1164 18.5131C9.16061 18.9542 7.94745 19.1748 6.47694 19.1748Z"
                fill="#363636"
              />
            </svg>
            119.99
            <span className="former_price">
              {" "}
              <svg
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.50094 19.287V0.712701H7.47693V19.287H5.50094ZM6.2123 17.1529C5.10574 17.1529 4.0453 17.008 3.03096 16.7182C2.01662 16.4152 1.19988 16.0266 0.580732 15.5524L1.66753 13.1417C2.26032 13.5632 2.9585 13.9123 3.76207 14.1889C4.57881 14.4524 5.40214 14.5841 6.23206 14.5841C6.86437 14.5841 7.37154 14.5249 7.75357 14.4063C8.14877 14.2746 8.43858 14.0967 8.623 13.8728C8.80743 13.6488 8.89964 13.392 8.89964 13.1021C8.89964 12.7333 8.75474 12.4435 8.46492 12.2327C8.17511 12.0088 7.79309 11.8309 7.31885 11.6992C6.84461 11.5543 6.31768 11.4226 5.73806 11.304C5.17161 11.1723 4.59857 11.0142 4.01895 10.8298C3.4525 10.6453 2.93216 10.4082 2.45792 10.1184C1.98368 9.82859 1.59507 9.44657 1.29209 8.97233C1.00228 8.49809 0.857371 7.89212 0.857371 7.15442C0.857371 6.36403 1.06814 5.64608 1.48969 5.00059C1.9244 4.34193 2.56989 3.82159 3.42615 3.43956C4.29559 3.04437 5.38238 2.84677 6.68653 2.84677C7.55597 2.84677 8.41223 2.95215 9.25532 3.16293C10.0984 3.36052 10.8427 3.66351 11.4882 4.07188L10.5002 6.50235C9.8547 6.13349 9.20921 5.86344 8.56372 5.69219C7.91823 5.50777 7.28592 5.41555 6.66678 5.41555C6.04763 5.41555 5.54046 5.48801 5.14526 5.63291C4.75007 5.77782 4.46684 5.96883 4.29559 6.20595C4.12434 6.42989 4.03871 6.69336 4.03871 6.99634C4.03871 7.35202 4.18362 7.64183 4.47343 7.86578C4.76324 8.07655 5.14526 8.2478 5.6195 8.37953C6.09374 8.51127 6.61408 8.643 7.18053 8.77473C7.76016 8.90646 8.33319 9.05796 8.89964 9.22921C9.47926 9.40046 10.0062 9.63099 10.4804 9.92081C10.9547 10.2106 11.3367 10.5926 11.6265 11.0669C11.9295 11.5411 12.081 12.1405 12.081 12.865C12.081 13.6422 11.8636 14.3536 11.4289 14.9991C10.9942 15.6446 10.3421 16.1649 9.47268 16.5601C8.61642 16.9553 7.52962 17.1529 6.2123 17.1529Z"
                  fill="#363636"
                />
              </svg>
              <span
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "#C31D1D",
                  textDecorationThickness: "5px",
                  marginLeft: "5px",
                }}
              >
                200
              </span>
            </span>
          </p>
        </div>

        <div className="promo_container">
          <HeaderText
            text="Promo Code"
            fontSize="20px"
            className="payment_header"
          />
          <p className="promo_sub_text">
            Get up to a
            <span style={{ color: "#0AA62D" }}>
              <b> 100% </b>
            </span>
            discount on the mentorship program
          </p>

          <div className="price_cancelled">
            <img
              className="cancel_icon"
              src="https://res.cloudinary.com/dmrdnero7/image/upload/v1654176450/frontendMentorship/cancel_uqiky7.png"
              alt="price cancelled icon"
            />
            <p
              className="discount_percent"
              style={{
                color: "#0AA62D",
                float: "right",
                fontWeight: "600",
                fontFamily: "Montserrat",
              }}
            >
              50% off or FREE
            </p>
            <p className="amount">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.96033 17.1303V0.25669H6.19042L16.1459 12.4057H14.6031V0.25669H18.46V17.1303H15.2299L5.27443 4.9813H6.81716V17.1303H2.96033ZM0.549814 11.3692V9.34434H4.2138V11.3692H0.549814ZM0.549814 8.04266V6.01783H4.2138V8.04266H0.549814ZM17.2788 11.3692V9.34434H20.8705V11.3692H17.2788ZM17.2788 8.04266V6.01783H20.8705V8.04266H17.2788Z"
                  fill="#363636"
                />
              </svg>
              44,999
            </p>

            <p className="amount  amount_in_dollar">
              <svg
                width="14"
                height="22"
                viewBox="0 0 14 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.68287 21.557V0.822944H7.88863V21.557H5.68287ZM6.47694 19.1748C5.24172 19.1748 4.05797 19.0131 2.92568 18.6896C1.79339 18.3513 0.881682 17.9175 0.190546 17.3882L1.40371 14.6971C2.06544 15.1677 2.8448 15.5574 3.74181 15.8662C4.65352 16.1603 5.57259 16.3073 6.499 16.3073C7.20484 16.3073 7.77099 16.2412 8.19743 16.1088C8.63858 15.9618 8.96209 15.7633 9.16796 15.5133C9.37383 15.2633 9.47677 14.9765 9.47677 14.653C9.47677 14.2413 9.31501 13.9178 8.9915 13.6825C8.66799 13.4325 8.24155 13.234 7.71217 13.0869C7.18279 12.9252 6.59458 12.7781 5.94756 12.6458C5.31525 12.4987 4.67558 12.3223 4.02856 12.1164C3.39624 11.9105 2.81539 11.6458 2.28601 11.3223C1.75663 10.9988 1.32283 10.5724 0.984618 10.043C0.661107 9.51361 0.499352 8.83718 0.499352 8.0137C0.499352 7.1314 0.734632 6.32998 1.20519 5.60943C1.69046 4.87418 2.41101 4.29333 3.36683 3.86688C4.33736 3.42573 5.55053 3.20516 7.00633 3.20516C7.97686 3.20516 8.93268 3.3228 9.87381 3.55808C10.8149 3.77865 11.6458 4.11687 12.3663 4.57273L11.2634 7.2858C10.5429 6.87406 9.82234 6.57261 9.10179 6.38144C8.38125 6.17557 7.6754 6.07264 6.98427 6.07264C6.29313 6.07264 5.72699 6.15352 5.28584 6.31527C4.84469 6.47703 4.52853 6.69025 4.33736 6.95494C4.1462 7.20493 4.05062 7.49903 4.05062 7.83724C4.05062 8.23428 4.21237 8.55779 4.53588 8.80777C4.85939 9.04305 5.28584 9.23422 5.81522 9.38127C6.3446 9.52832 6.92545 9.67537 7.55776 9.82242C8.20479 9.96947 8.84445 10.1386 9.47677 10.3297C10.1238 10.5209 10.712 10.7782 11.2414 11.1018C11.7708 11.4253 12.1972 11.8517 12.5207 12.3811C12.8589 12.9105 13.028 13.5796 13.028 14.3883C13.028 15.2559 12.7854 16.05 12.3001 16.7705C11.8149 17.4911 11.087 18.0719 10.1164 18.5131C9.16061 18.9542 7.94745 19.1748 6.47694 19.1748Z"
                  fill="#363636"
                />
              </svg>
              119.99
            </p>
          </div>
          <NormalText
            className="get_access_to_the_discount"
            text="Get access to the discount by completing the steps and the question form. You’ll get a promo code sent to your mail once we launch!"
          />
        </div>
      </div>

      <div className="steps_for_challenge">
        <div className="overlap_container">
          <div className="text_container">
            <HeaderText
              text="Steps for Challenge"
              fontSize="24px"
              fontWeight="700"
              className="steps_header"
            />

            <div className="for_the_selection_process_list">
              <NormalText
                fontSize="18px"
                fontWeight="600"
                text="For the selection process:"
              />
              {list.map((li) => {
                const { icon, text } = li;
                return (
                  <div className="each_process">
                    <img src={icon} alt="" />
                    <NormalText className="list_item" text={text} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="button_container">
            <GeneralButton
              buttonText="Signup for free"
              borderRadius="15px"
              onClick={() => push(REGISTRATION_PAGE)}
              className="signup_button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
