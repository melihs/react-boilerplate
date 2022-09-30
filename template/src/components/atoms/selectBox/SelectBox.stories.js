import { get } from "lodash";
import SelectBox from "./SelectBox";
import useState from "storybook-addon-state";

const [value, set] = useState(2018);

export default {
  title: "Select Box",
  component: SelectBox,
  argTypes: {
    value: {
      description: "Bileşenin seçilen değeri",
      control: "none"
    },
    options: {
      description: "Bileşenin seçeneklerini belirler"
    },
    name: {
      description: "Bileşenin adı"
    },
    onChange: {
      description: "Seçenek değiştiğinde tetiklenen fonksiyon"
    },
    className: {
      description: "Bileşene ekstra class tanımlar."
    }
  }
};

const Template = (args) => <SelectBox {...args}></SelectBox>;

export const Default = Template.bind({});

Default.args = {
  value,
  options: [
    {
      name: 2018,
      value: "2018"
    },
    {
      name: 2019,
      value: "2019"
    },
    {
      name: 2020,
      value: "2020"
    },
    {
      name: 2021,
      value: "2021"
    }
  ],
  onChange: (e) => set(get(e, "target.value")),
  className: "w-36",
  name: "default"
};
