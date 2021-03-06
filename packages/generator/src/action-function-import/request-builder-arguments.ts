import {
  VdmActionImport,
  VdmFunctionImport,
  VdmServiceMetadata
} from '../vdm-types';
import { responseTransformerFunctionName } from './response-transformer-function';

export function getRequestBuilderArgumentsBase(
  actionFunctionImport: VdmFunctionImport | VdmActionImport,
  service: VdmServiceMetadata
): string[] {
  return [
    `'${service.servicePath}'`,
    `'${actionFunctionImport.originalName}'`,
    `(data) => ${responseTransformerFunctionName(
      actionFunctionImport.returnType,
      service.oDataVersion
    )}(data, ${actionFunctionImport.returnType.builderFunction})`,
    'params'
  ];
}
