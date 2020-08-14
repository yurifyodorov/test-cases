import { Category, ExamplePage } from '../types';

const url = '/data/pages.json';

class PagesService {

  getPagesByType(category: Category): Promise<ExamplePage[]> {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverPages) => {

        const examplesPages = serverPages
          .filter((serverPage: any) => serverPage.category === category)
          .map(this.map);

        return examplesPages;
      })
      .catch((e) => {
        console.error('An error occurred retrieving the examples pages from ' + url, e);
      })
  }

  getFavorites(): Promise<ExamplePage[]> {

    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverPages) => {
        const examplesPages = serverPages
          .filter((serverPage: any) => serverPage.isFavourite === true)
          .map(this.map);

        return examplesPages;
      })
      .catch((e) => {
        console.error('An error occurred retrieving the example pages from ' + url, e);
      })
  }

  private map(serverPage: any): ExamplePage {
    return {
      id: serverPage.id,
      title: serverPage.title,
      content: serverPage.content,
      dateString: serverPage.dateString,
      baseImageName: serverPage.baseImageName,
      category: serverPage.Category,
      isFavourite: serverPage.isFavourite,
      slug: serverPage.slug
    } as ExamplePage;
  }

}

export default new PagesService();