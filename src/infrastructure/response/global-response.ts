import { IGlobalResponse } from 'src/application/interfaces/global-response.interface';
import {
  GlobalResponseErrorParams,
  GlobalResponseErrorReturnType,
  GlobalResponseSuccessParams,
  GlobalResponseSuccessReturnType,
} from 'src/application/types/global-response.type';

export const GlobalResponse: IGlobalResponse = Object.freeze({
  success<ResponseDataType>({
    statusCode,
    message,
    data,
  }: GlobalResponseSuccessParams<ResponseDataType>): GlobalResponseSuccessReturnType<ResponseDataType> {
    const responseTime = new Date().toISOString();

    if (!data) {
      return {
        status: 'success',
        statusCode,
        message,
        timestamp: responseTime,
      };
    }

    return {
      status: 'success',
      statusCode,
      message,
      data,
      timestamp: responseTime,
    };
  },
  error({
    statusCode,
    message,
  }: GlobalResponseErrorParams): GlobalResponseErrorReturnType {
    const responseTime = new Date().toISOString();

    return {
      status: 'error',
      statusCode,
      message,
      timestamp: responseTime,
    };
  },
});
