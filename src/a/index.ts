/**
 * 附件相关的方法
 * @desc 提供与附件相关的一系列接口，使用前请先import
 * @namespace vds/attachment
 * @module attachment
 * @catalog 工具方法/附件
 * @example
 * import * as attachment from '@v-act/vjs.framework.extension.platform.services.integration.vds.attachment'
 * attachment.preview("7b88f8aff9fb47d48e1b555201963dc9")
 *
 */

import {
  DcsService as dcs,
} from '@v-act/vjs.framework.extension.platform.services.dcs';

/**
 * 根据文件id预览文件
 * @param {String} fileId 文件id
 * @returns {Promise}
 * @example
 * attachment.preview("7b88f8aff9fb47d48e1b555201963dc9");
 *
 * */
export function preview(fileId: string) {
  return new Promise(function (resolve, reject) {
    try {
      if (!fileId) {
        reject(vds.exception.newConfigException('预览的文件id不能为空'))
        return
      }
      dcs.previewByFileId(fileId, resolve, reject)
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * 转换文件id
 * @param {String} fileId 文件id
 * @returns {Promise}
 * @example
 * attachment.convert("7b88f8aff9fb47d48e1b555201963dc9");
 * */
export function convert(fileId: string) {
  return new Promise(function (resolve, reject) {
    try {
      if (!fileId) {
        reject(vds.exception.newConfigException('转换的文件id不能为空'))
        return
      }
      dcs.conversionByFileId(fileId, resolve, reject)
    } catch (e) {
      reject(e)
    }
  })
}
