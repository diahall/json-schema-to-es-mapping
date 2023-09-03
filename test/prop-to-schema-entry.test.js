const { propToSchemaEntry } = require("../src/prop-to-schema-entry")
const { SchemaEntryError } = require("../src/entry")

describe("prop-to-schema-entry test", () => {
    test("config is prioritized over default", () => {
        const config = {
            createSchemaEntry: (obj, config) => "fake"
        }
        const result = propToSchemaEntry({}, config)
        // We expect `propToSchemaEntry` to return "fake" as specified in the config rather than calling the default `toEntry`
        expect(result).toEqual("fake")
    })

    test("default toEntry is called where nothing specified in config", () => {
        try {
            // This is to make sure the default will trigger with no config specified
            propToSchemaEntry({"value": {"type": 45}})
        } catch (error) {
            // We expect this error if default `toEntry` is called, which is all we want to see
            expect(error).toBeInstanceOf(SchemaEntryError)
        }
    })
})