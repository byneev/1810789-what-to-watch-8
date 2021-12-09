import TabDetails from '../components/tab-details/tab-details';
import TabOverview from '../components/tab-overview/tab-overview';
import TabReviews from '../components/tab-reviews/tab-reviews';
import { TabType } from './const';

export const getTabByContext = (context: TabType):JSX.Element => {
  switch (context) {
    case TabType.DETAILS:
      return <TabDetails />;
    case TabType.OVERVIEW:
      return <TabOverview />;
    case TabType.REVIEWS:
      return <TabReviews />;
  }
};
