import Request from './request'
import { getEarthdataConfig } from '../../../../../sharedUtils/config'

/**
 * Request object for timeline specific requests
 */
export default class TimelineRequest extends Request {
  constructor(authToken) {
    if (authToken && authToken !== '') {
      super(getEarthdataConfig('sit').apiHost)

      this.authenticated = true
      this.authToken = authToken
      this.searchPath = 'granules/timeline'
    } else {
      super(getEarthdataConfig('sit').cmrHost)

      this.searchPath = 'search/granules/timeline'
    }
  }

  permittedCmrKeys() {
    return [
      'concept_id',
      'end_date',
      'interval',
      'start_date'
    ]
  }

  nonIndexedKeys() {
    return [
      'concept_id'
    ]
  }
}
