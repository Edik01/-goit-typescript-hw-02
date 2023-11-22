interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "My Page" });
page.pageInfo();
