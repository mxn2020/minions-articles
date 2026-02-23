"""
Minions Articles Python SDK

Article drafts, revisions, SEO metadata, and publish status
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Articles.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
