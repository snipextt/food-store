import { generatePage } from "./generatePage";
function PageRenderer({
  match: {
    params: { page },
  },
}) {
  return generatePage(page);
}

export default PageRenderer;
