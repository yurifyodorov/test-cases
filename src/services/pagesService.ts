import { Category, ExamplePage } from "../types";

const url = "/data/pages.json";

class PagesService {
  getPagesByType(category: Category): Promise<ExamplePage[]> {
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(serverPages => {
        const examplesPages = serverPages
          .filter((serverPage: any) => serverPage.category === category)
          .map(this.map);

        return examplesPages;
      })
      .catch(e => {
        console.error(
          "An error occurred retrieving the examples pages from " + url,
          e
        );
      });
  }

  getCompletedPages(): Promise<ExamplePage[]> {
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(serverPages => {
        const examplesPages = serverPages
          .filter((serverPage: any) => serverPage.isDone === true)
          .map(this.map);

        return examplesPages;
      })
      .catch(e => {
        console.error(
          "An error occurred retrieving the example pages from " + url,
          e
        );
      });
  }

  getProgressPages(): Promise<ExamplePage[]> {
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(serverPages => {
        const examplesPages = serverPages
          .filter((serverPage: any) => serverPage.inProgress === true)
          .map(this.map);

        return examplesPages;
      })
      .catch(e => {
        console.error(
          "An error occurred retrieving the example pages from " + url,
          e
        );
      });
  }

  getWaitingPages(): Promise<ExamplePage[]> {
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(serverPages => {
        const examplesPages = serverPages
          .filter((serverPage: any) => serverPage.isWaiting === true)
          .map(this.map);

        return examplesPages;
      })
      .catch(e => {
        console.error(
          "An error occurred retrieving the example pages from " + url,
          e
        );
      });
  }

  private map(serverPage: any): ExamplePage {
    return {
      id: serverPage.id,
      title: serverPage.title,
      content: serverPage.content,
      icon: serverPage.icon,
      category: serverPage.Category,
      slug: serverPage.slug,
      isWaiting: serverPage.isWaiting,
      inProgress: serverPage.inProgress,
      isDone: serverPage.isDone,
    } as ExamplePage;
  }
}

export default new PagesService();
