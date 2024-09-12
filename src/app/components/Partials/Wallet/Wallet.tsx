import CommonVerticalTabs from "@components/Common/Tabs/CommonVerticalTabs";
import Balance from "@components/Partials/Wallet/Balance";
import Deposit from "@components/Partials/Wallet/Deposit";
import BetSwap from "@components/Partials/Wallet/BetSwap";

import balance from "@assets/images/icons/balance.png"
import deposit from "@assets/images/icons/deposit.png"
import withdraw from "@assets/images/icons/withdraw.png"
import betSwap from "@assets/images/icons/bet-swap.png"
import depositHistory from "@assets/images/icons/deposit-history.png"
import withdrawHistory from "@assets/images/icons/withdraw-history.png"

const walletContentTab = [
  {
    label: "Balance",
    icon: balance,
    content: <Balance />,
  },
  {
    label: "Deposit",
    icon: deposit,
    content: <Deposit />,
  },
  {
    label: "Withdraw",
    icon: withdraw,
    content: <p>This is the content of the Withdraw tab.</p>,
  },
  {
    label: "BET Swap",
    icon: betSwap,
    content: <BetSwap />,
  },
  {
    label: "Deposit History",
    icon: depositHistory,
    content: <p>This is the content of the Deposit History tab.</p>,
  },
  {
    label: "Withdraw History",
    icon: withdrawHistory,
    content: <p>This is the content of the Withdraw History tab.</p>,
  },
];

const WalletContent = () => {
  return <CommonVerticalTabs tabs={walletContentTab} />;
};

export default WalletContent;
