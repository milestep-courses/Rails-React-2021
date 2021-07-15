// https://ru.reactjs.org/docs/error-boundaries.html
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      // eslint-disable-next-line react/react-in-jsx-scope
      return <h1>Что-то пошло не так.</h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
