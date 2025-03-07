from bson import ObjectId
def convert_objectid(obj):
    """Recursively convert ObjectId to string."""
    if isinstance(obj, list):
        return [convert_objectid(o) for o in obj]
    elif isinstance(obj, dict):
        return {k: convert_objectid(v) for k, v in obj.items()}
    elif isinstance(obj, ObjectId):
        return str(obj)
    else:
        return obj