import people from "../../Resources/people.png"
import rupee_symbol from "../../Resources/rupee_symbol.png"
import wallet from "../../Resources/wallet.png"
import discount from "../../Resources/discount.png"
import coupon from "../../Resources/coupon.png"

const details = [{
    image : people,
    heading: "Invite your Friends",
    description: "Share the link tutedude.com with your friends"
},
{
    image : rupee_symbol,
    heading: "You get ₹ 200 as referral money",
    description: "On total purchase the friend makes, into your wallet"
},{
    image : wallet,
    heading: "Transfer money from wallet",
    description: "When the wallet balance reaches ₹200 or more, you can withdraw it"
},{
    image : coupon,
    heading: "Friend purchases any course",
    description: "Using your REFERRAL CODE in the payments page"
},{
    image : discount,
    heading: "Your Friend gets ₹ 200 Off",
    description: "On his overall fee on successful purchase using your referral code "
},
]

export default details;