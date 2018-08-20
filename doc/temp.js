/**
 * 校验
 */
// examine(name) {


//     let {password,pwdConfirmExamine,account,IdCard} =  this.state;

//     if (name == 'pwdExamine' ) {
//         let reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,18}$/;
//         let flag = reg.test(password)

//         this.setState({
//             pwdExamine:flag,
//         })
//     }
//     if (name == 'pwdConfirmExamine' ) {
//         this.setState({
//             pwdConfirmExamine: this.state.password ===  this.state.passwordConfirm,
//         })
//     }
//     if (name == 'phoneExamine') {
//         let flag = Util.checkInput(account, 'mobile');

//         this.setState({
//             phoneExamine:flag,
//         })
//     }
//     if (name == "IDExamine") {
//         let reg18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
//         let reg15 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/
//         let flag = reg18.test(IdCard) || reg15.test(IdCard)
//          this.setState({
//             IDExamine:flag,
//             IDIsBlur:true,
//         })
//     }

//     this.setState({
//         step1Examine:this.state.phoneExamine && this.state.passwordConfirm && this.state.password && this.state.pwdExamine && this.state.pwdConfirmExamine && this.state.username && this.state.msnPassword && this.state.account
//     })
//     this.setState({
//         step2Examine: this.state.IDExamine && this.state.proprietor && this.state.license && this.state.company && this.state.IdCard
//     })
// }
