import * as HomeStyles from "./styles.ts";

import { useTranslation } from "../../hooks/index.ts";

function Home() {
  const { t } = useTranslation("home");

  return <HomeStyles.Container>{t("title")}</HomeStyles.Container>;
}

export default Home;
