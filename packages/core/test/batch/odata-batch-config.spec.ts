import { ODataBatchRequestConfig } from '../../src/odata/common/request/odata-batch-request-config';
import { defaultTestServicePath } from '../test-util/test-services/v2/test-service';

describe('ODataBatchConfig', () => {
  let config: ODataBatchRequestConfig;

  beforeEach(() => {
    config = new ODataBatchRequestConfig(defaultTestServicePath, 'batch_id');
  });

  it('method is post', () => {
    expect(config.method).toBe('post');
  });

  it('has resourcePath without keys', () => {
    expect(config.resourcePath()).toBe('$batch');
  });

  it('has no parameters', () => {
    expect(Object.keys(config.queryParameters()).length).toEqual(0);
  });
});
