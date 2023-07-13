import ExpoModulesCore

public class ExpoSettingsModule: Module {

  public func definition() -> ModuleDefinition {

    Name("ExpoSettings")

    Function("hello") {
      return "Hello world! 👋"
    }

    View(ExpoSettingsView.self) {
      // Defines a setter for the `name` prop.
      Prop("name") { (view: ExpoSettingsView, prop: String) in
        print(prop)
      }
    }
  }
}
