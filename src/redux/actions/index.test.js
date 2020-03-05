import * as actions from './index'

describe('saveFormData actions', () => {
  it('saveFormData should create SAVE_FORMDATA action', () => {
    expect(actions.saveFormData('fdse4323', 'Test Name', '012345', '12345678')).toEqual({
      type: 'SAVE_FORMDATA',
      id: 0,
      salaryNo: 'fdse4323',
      name: 'Test Name',
      bsb: '012345',
      accNo: '12345678'
    })
  })
})