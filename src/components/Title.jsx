import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Title = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default Title;