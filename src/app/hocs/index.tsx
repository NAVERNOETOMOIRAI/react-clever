import { compose } from "@reduxjs/toolkit";
import withAuth from "./withAuth";
import withRedux from "./withRedux";
/**
 * @hoc Инициализирующая логика приложения
 * @remark Содержит:
 * - логику инициализации antd (withAntd)
 * - логику подключения к API (withApollo)
 * - логику инициализации роутера (withRouter)
 */
export const withHocs = compose<React.ElementType>(withAuth);
