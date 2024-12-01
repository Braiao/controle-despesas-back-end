import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
    prop1: string
    prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
    it('Should set props and id', () => {
        const props = {
            prop1: 'value1',
            prop2: 2,
        }
        const entity = new StubEntity(props)

        expect(entity.props).toStrictEqual(props)
        expect(entity._id).not.toBeNull()
        expect(uuidValidate(entity._id)).toBeTruthy()
    })

    it('Should accept a valid uuid', () => {
        const props = {
            prop1: 'value1',
            prop2: 2,
        }
        const id = 'feaca1c5-c011-42c6-ad14-e4670859b684'
        const entity = new StubEntity(props, id)

        expect(uuidValidate(entity._id)).toBeTruthy()
        expect(entity._id).toBe(id)
    })

    it('Should convert an entity to a JavaScript Object', () => {
        const props = {
            prop1: 'value1',
            prop2: 2,
        }
        const id = 'feaca1c5-c011-42c6-ad14-e4670859b684'
        const entity = new StubEntity(props, id)

        expect(entity.toJSON()).toStrictEqual({
            id,
            ...props,
        })
    })
})
